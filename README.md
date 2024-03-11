# AccSYS: Asset Coordination and Control System

## Introduction

AccSYS is a modern inventory management system designed to enhance tracking and management of assets. It leverages barcode and QR code scanning for physical tracking, user management, and location tracking, aiming to replace outdated spreadsheet-based systems.

## License

This project is licensed under the [MIT License](LICENSE).

## Objectives

- **Centralized Tracking**: Streamline inventory management with a centralized system.
- **Operational Efficiency**: Automate item usage and movement tracking.
- **User Role Support**: Tailor functionalities for various user roles.
- **Data Integrity**: Ensure accuracy and integrity through robust error handling.

## User Roles and Permissions

### Agency Management
- **Full Administrative Access**: Manage inventory, users, locations, and events.
- **Reporting Access**: Access all system reports and analytics.

### Agency Staff
- **Limited Administrative Access**: Restrictions on sensitive operations.
- **Reporting Access**: Selected system reports and analytics.

### Logistics
- **Item and Location Management**: Add and modify items and locations.
- **Reporting Access**: Inventory and movement reports.

### People Admin
- **User Account Control**: Create, modify, and delete user accounts.
- **Role Assignment**: Assign and change user roles.
- **Reporting Access**: User management reports.

### Event Management
- **Full Administrative Access**: Manage event settings and configurations.
- **Reporting Access**: All system reports and analytics scoped to the event.

### Event Staff
- **Limited Access**: Read/write access to existing items and locations during events.
- **User Management**: Add users scoped to the event.
- **Reporting Access**: Inventory and movement reports scoped to the event.

### Regular User
- **Item and Movement Records**: Create items and movement records.
- **Reporting Access**: Filter inventory and movement reports for their own items.

## Item Management

- **Barcode and QR Code Tracking**: Items tracked using barcodes and QR codes.
- **Mass-Entry Mode**: Add new items with QR code generation for consumables.
- **Event Mode Handling**: Prompt for new item addition for unrecognized barcodes.
- **Item Information Changes**: Handled by authorized personnel.
- **Item Deletion**: Marked as "depleted" or "deleted" for audit.

## Reporting Capabilities

- **Default Reports**: Inventory by location, stock, item usage by event/funding source, user activity.
- **Custom Reports**: Support for ad-hoc report creation.

## Technical Requirements

### Front-End

- **Flutter:** AccSYS utilizes Flutter for its front-end development. Flutter is a UI toolkit from Google that allows developers to create natively compiled applications for mobile, web, and desktop from a single codebase. It's chosen for its performance, ease of use, and the ability to create a highly responsive and visually appealing user interface.

### Back-End

- **NestJS:** The back-end of AccSYS is built with NestJS, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. NestJS leverages TypeScript, ensuring type safety and enhancing developer productivity.

- **PostgreSQL:** AccSYS uses PostgreSQL as its primary database. PostgreSQL is a powerful, open-source object-relational database system known for its robustness, scalability, and performance.

- **Knex.js:** Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use. It's used in AccSYS to simplify database interactions and ensure type safety.

### State Management

- **Riverpod:** Riverpod is used for state management in AccSYS. It's a flexible and powerful state management solution that works well with Flutter, providing a clean and efficient way to manage the state of the application.

### Authentication

- **Username/Password with 2FA:** AccSYS supports traditional username/password authentication, enhanced with two-factor authentication (2FA) for added security. Users can opt to use a 2FA app for an extra layer of security.

- **Auth0:** For a seamless authentication experience, AccSYS integrates Auth0. Auth0 provides a comprehensive authentication and authorization platform that supports various authentication methods, including social logins, single sign-on (SSO), and multi-factor authentication (MFA), including 2FA.

- **QR Code Scanning for 2FA:** AccSYS also supports QR code scanning for 2FA, allowing users to authenticate using a QR code displayed on their device, enhancing security and convenience.

### API Design

- **OpenAPI and Swagger:** AccSYS uses OpenAPI and Swagger for API design and documentation. These tools help in defining, building, and documenting RESTful APIs in a standardized way, making it easier for developers to understand and integrate with the API.

### Deployment

- **Docker using Docker Compose:** AccSYS is containerized using Docker, allowing for easy deployment and scaling. Docker Compose is used to define and run multi-container Docker applications, simplifying the deployment process.

- **Nginx-Proxy-Manager:** This Docker-based application is used for managing Nginx proxy hosts, providing a simple and powerful interface for managing reverse proxies, SSL certificates, and domain configurations.

- **Secrets Store:** AccSYS uses a secure storage solution for sensitive data like API keys and database credentials, ensuring that these critical pieces of information are protected.

### CI/CD

- **GitHub Actions:** AccSYS leverages GitHub Actions for continuous integration and continuous deployment (CI/CD). GitHub Actions allows for automated testing, building, and deployment of the application, ensuring that the codebase is always in a deployable state.

### Monorepo

- **nx:** AccSYS uses nx, a set of extensible dev tools for monorepos, to manage its monorepo structure. nx provides tools and practices for scaling the development of applications with multiple packages and libraries.

### Package Management

- **npm:** npm is used for package management in AccSYS, allowing for efficient management of dependencies and scripts.

### Testing

- **Flutter Testing:** AccSYS uses Flutter's testing framework for unit, widget, and integration tests, ensuring that the application behaves as expected and that changes do not introduce regressions.

- **Jest:** For back-end testing, Jest is used. Jest is a delightful JavaScript Testing Framework with a focus on simplicity, providing features like a zero-configuration testing experience, support for BDD, and powerful mocking capabilities.

## Error Handling and Discrepancies

- **Scanning Library**: Handles barcode scanning errors and prompts for re-scanning.
- **Discrepancy Resolution**: Compare scanned codes against existing data and online sources.
- **Mass-Entry Mode Quality Checks**: Implement comprehensive quality checks and error handling.

## Conclusion

AccSYS aims to revolutionize inventory management with a user-friendly platform supporting various user roles and functionalities. It ensures efficient asset management, improving operational efficiency and data accuracy.
