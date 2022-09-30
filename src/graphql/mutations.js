/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      description
      books {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      description
      books {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      description
      books {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTarget = /* GraphQL */ `
  mutation CreateTarget(
    $input: CreateTargetInput!
    $condition: ModelTargetConditionInput
  ) {
    createTarget(input: $input, condition: $condition) {
      id
      label
      description
      books {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTarget = /* GraphQL */ `
  mutation UpdateTarget(
    $input: UpdateTargetInput!
    $condition: ModelTargetConditionInput
  ) {
    updateTarget(input: $input, condition: $condition) {
      id
      label
      description
      books {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTarget = /* GraphQL */ `
  mutation DeleteTarget(
    $input: DeleteTargetInput!
    $condition: ModelTargetConditionInput
  ) {
    deleteTarget(input: $input, condition: $condition) {
      id
      label
      description
      books {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
      id
      name
      description
      picture_key
      ownerId
      ownerName
      categoryId
      category {
        id
        name
        description
        createdAt
        updatedAt
      }
      targetId
      target {
        id
        label
        description
        createdAt
        updatedAt
      }
      findBook
      comments {
        nextToken
      }
      discussion {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
      id
      name
      description
      picture_key
      ownerId
      ownerName
      categoryId
      category {
        id
        name
        description
        createdAt
        updatedAt
      }
      targetId
      target {
        id
        label
        description
        createdAt
        updatedAt
      }
      findBook
      comments {
        nextToken
      }
      discussion {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
      id
      name
      description
      picture_key
      ownerId
      ownerName
      categoryId
      category {
        id
        name
        description
        createdAt
        updatedAt
      }
      targetId
      target {
        id
        label
        description
        createdAt
        updatedAt
      }
      findBook
      comments {
        nextToken
      }
      discussion {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      bookId
      ownerId
      ownerName
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      bookId
      ownerId
      ownerName
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      bookId
      ownerId
      ownerName
      createdAt
      updatedAt
    }
  }
`;
export const createDiscussion = /* GraphQL */ `
  mutation CreateDiscussion(
    $input: CreateDiscussionInput!
    $condition: ModelDiscussionConditionInput
  ) {
    createDiscussion(input: $input, condition: $condition) {
      id
      bookId
      book {
        id
        name
        description
        picture_key
        ownerId
        ownerName
        categoryId
        targetId
        findBook
        createdAt
        updatedAt
      }
      name
      receiverId
      senderId
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDiscussion = /* GraphQL */ `
  mutation UpdateDiscussion(
    $input: UpdateDiscussionInput!
    $condition: ModelDiscussionConditionInput
  ) {
    updateDiscussion(input: $input, condition: $condition) {
      id
      bookId
      book {
        id
        name
        description
        picture_key
        ownerId
        ownerName
        categoryId
        targetId
        findBook
        createdAt
        updatedAt
      }
      name
      receiverId
      senderId
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDiscussion = /* GraphQL */ `
  mutation DeleteDiscussion(
    $input: DeleteDiscussionInput!
    $condition: ModelDiscussionConditionInput
  ) {
    deleteDiscussion(input: $input, condition: $condition) {
      id
      bookId
      book {
        id
        name
        description
        picture_key
        ownerId
        ownerName
        categoryId
        targetId
        findBook
        createdAt
        updatedAt
      }
      name
      receiverId
      senderId
      messages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      discussionId
      discussion {
        id
        bookId
        name
        receiverId
        senderId
        createdAt
        updatedAt
      }
      content
      senderId
      senderName
      receiverId
      receiverName
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      discussionId
      discussion {
        id
        bookId
        name
        receiverId
        senderId
        createdAt
        updatedAt
      }
      content
      senderId
      senderName
      receiverId
      receiverName
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      discussionId
      discussion {
        id
        bookId
        name
        receiverId
        senderId
        createdAt
        updatedAt
      }
      content
      senderId
      senderName
      receiverId
      receiverName
      createdAt
      updatedAt
    }
  }
`;
