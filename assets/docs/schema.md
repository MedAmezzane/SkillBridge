# Course Platform Database Schema

## Models Overview

### 1. Course Model
**Table Name:** Course
- **Primary Key:** `courseId` (Hash Key)
- **Attributes:**
  - `teacherId`: Identifies course creator
  - `teacherName`: Name of course instructor
  - `title`: Course title
  - `description`: Course overview
  - `category`: Course subject area
  - `image`: Course thumbnail URL
  - `price`: Course cost
  - `level`: Difficulty level (Beginner/Intermediate/Advanced)
  - `status`: Course publication status (Draft/Published)
  - `sections`: Nested array of course sections
  - `enrollments`: List of enrolled user IDs
  - `createdAt`, `updatedAt`: Timestamps

#### Nested Schemas
- **Section Schema**
  - `sectionId`
  - `sectionTitle`
  - `sectionDescription`
  - `chapters`: Array of chapter details

- **Chapter Schema**
  - `chapterId`
  - `type`: Content type (Text/Quiz/Video)
  - `title`
  - `content`
  - `comments`: User comments
  - `video`: Optional video URL

### 2. User Course Progress Model
**Table Name:** UserCourseProgress
- **Primary Key:** Composite of `userId` and `courseId`
- **Attributes:**
  - `enrollmentDate`
  - `overallProgress`: Percentage completion
  - `sections`: Progress tracking for each section
  - `lastAccessedTimestamp`
  - `createdAt`, `updatedAt`: Timestamps

#### Nested Schemas
- **Section Progress Schema**
  - `sectionId`
  - `chapters`: Completion status of chapters

- **Chapter Progress Schema**
  - `chapterId`
  - `completed`: Boolean progress indicator

### 3. Transaction Model
**Table Name:** Transaction
- **Primary Key:** Composite of `userId` and `transactionId`
- **Global Secondary Index:** `courseId`
- **Attributes:**
  - `dateTime`: Transaction timestamp
  - `courseId`: Purchased course identifier
  - `paymentProvider`: Payment method (currently Stripe)
  - `amount`: Transaction value
  - `createdAt`, `updatedAt`: Timestamps

## Database Relationships
- One User can have multiple Course Progresses
- One Course can have multiple Transactions
- One Course can have multiple Enrollments
- Chapters can have multiple Comments

## Key Constraints
- Unique identifiers for Course, User Progress, and Transactions
- Enforced enumeration for course levels, statuses, and chapter types
- Timestamp tracking for all models