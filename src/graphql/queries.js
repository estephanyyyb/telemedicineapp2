/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
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
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        reportLink
        user {
          id
          username
          email
          given_name
          family_name
          createdAt
          updatedAt
        }
        id
        createdAt
        updatedAt
        userReportsId
      }
      nextToken
    }
  }
`;
export const getAppointments = /* GraphQL */ `
  query GetAppointments($id: ID!) {
    getAppointments(id: $id) {
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
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
