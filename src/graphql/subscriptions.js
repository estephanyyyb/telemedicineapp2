/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport {
    onCreateReport {
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
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport {
    onUpdateReport {
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
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport {
    onDeleteReport {
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
export const onCreateAppointments = /* GraphQL */ `
  subscription OnCreateAppointments {
    onCreateAppointments {
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
export const onUpdateAppointments = /* GraphQL */ `
  subscription OnUpdateAppointments {
    onUpdateAppointments {
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
export const onDeleteAppointments = /* GraphQL */ `
  subscription OnDeleteAppointments {
    onDeleteAppointments {
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
