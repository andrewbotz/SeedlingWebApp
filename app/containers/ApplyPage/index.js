import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useForm, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import {
  Box,
  Button,
  FormField,
  Heading,
  Form,
  TextArea,
  TextInput,
} from 'grommet';

import { saveJobApplicant } from 'actions/JobActions';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import reducer from 'reducers/JobReducer';
import saga from 'sagas/JobSagas';

const key = 'job';

// TODO-Abotz: clean up inline styling and move this out to own file?
export const Wrapper = styled(Box)`
  max-width: 800px;
  margin: 0 auto;
`;

export function ApplyPage({ onSubmitApplicant }) {
  const { id } = useParams();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // TODO-abotz: Need to add loading indicator and stop form from being able to post more than once (route to thank you page will happen in saga)
  const { handleSubmit, control, errors } = useForm();
  const onSubmit = values => {
    onSubmitApplicant(id, { ...values });
  };

  return (
    <article>
      <Helmet>
        <title>Job Page</title>
        <meta name="description" content="Apply for non-profit job." />
      </Helmet>
      <Box align="center">
        <Box margin="large" align="center" pad="medium">
          <Box align="center" pad="small">
            <Heading level="2">Apply</Heading>
          </Box>
          <Box margin="medium" fill>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                label="First Name"
                error={errors.firstName && errors.firstName.message}
              >
                <Controller
                  as={<TextInput plain />}
                  name="firstName"
                  rules={{
                    required: 'First name is required.',
                  }}
                  control={control}
                />
              </FormField>

              <FormField
                label="Last Name"
                error={errors.lastName && errors.lastName.message}
              >
                <Controller
                  as={<TextInput plain />}
                  name="lastName"
                  rules={{
                    required: 'Last name is required.',
                  }}
                  control={control}
                />
              </FormField>

              <FormField
                label="Email"
                error={errors.email && errors.email.message}
              >
                <Controller
                  as={<TextInput plain />}
                  name="email"
                  rules={{
                    required: 'Email is required.',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Invalid email address',
                    },
                  }}
                  control={control}
                />
              </FormField>

              <FormField
                label="Tell us why you want to help out with this cause?"
                error={
                  errors.reasonForInterest && errors.reasonForInterest.message
                }
              >
                <Controller
                  as={<TextArea plain />}
                  name="reasonForInterest"
                  rules={{
                    required: 'Reason for interest is required.',
                  }}
                  control={control}
                />
              </FormField>
              <Box align="center" pad="medium">
                <Button
                  fill
                  primary
                  size="large"
                  type="submit"
                  label="Submit"
                />
              </Box>
            </Form>
          </Box>
        </Box>
      </Box>
    </article>
  );
}

ApplyPage.propTypes = {
  onSubmitApplicant: PropTypes.func,
};

const mapStateToProps = () => ({});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitApplicant: (id, applicant) =>
      dispatch(saveJobApplicant.request(id, applicant)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ApplyPage);
