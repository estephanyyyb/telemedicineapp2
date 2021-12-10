/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      given_name
      family_name
      reports {
        items {
          reportLink
          id
          createdAt
          updatedAt
          userReportsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      given_name
      family_name
      reports {
        items {
          reportLink
          id
          createdAt
          updatedAt
          userReportsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      given_name
      family_name
      reports {
        items {
          reportLink
          id
          createdAt
          updatedAt
          userReportsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
      reportLink
      user {
        id
        username
        email
        given_name
        family_name
        reports {
          nextToken
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      userReportsId
    }
  }
`;
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
      reportLink
      user {
        id
        username
        email
        given_name
        family_name
        reports {
          nextToken
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      userReportsId
    }
  }
`;
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
      reportLink
      user {
        id
        username
        email
        given_name
        family_name
        reports {
          nextToken
        }
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
      userReportsId
    }
  }
`;
export const createAppointments = /* GraphQL */ `
  mutation CreateAppointments(
    $input: CreateAppointmentsInput!
    $condition: ModelAppointmentsConditionInput
  ) {
    createAppointments(input: $input, condition: $condition) {
      patient
      doctor
      date
      reason
      notes
      approval
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateAppointments = /* GraphQL */ `
  mutation UpdateAppointments(
    $input: UpdateAppointmentsInput!
    $condition: ModelAppointmentsConditionInput
  ) {
    updateAppointments(input: $input, condition: $condition) {
      patient
      doctor
      date
      reason
      notes
      approval
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteAppointments = /* GraphQL */ `
  mutation DeleteAppointments(
    $input: DeleteAppointmentsInput!
    $condition: ModelAppointmentsConditionInput
  ) {
    deleteAppointments(input: $input, condition: $condition) {
      patient
      doctor
      date
      reason
      notes
      approval
      id
      createdAt
      updatedAt
    }
  }
`;
