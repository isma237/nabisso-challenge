/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchBooks = /* GraphQL */ `
  query SearchBooks(
    $filter: SearchableBookFilterInput
    $sort: [SearchableBookSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableBookAggregationInput]
  ) {
    searchBooks(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchComments = /* GraphQL */ `
  query SearchComments(
    $filter: SearchableCommentFilterInput
    $sort: [SearchableCommentSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCommentAggregationInput]
  ) {
    searchComments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        content
        bookId
        ownerId
        ownerName
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTarget = /* GraphQL */ `
  query GetTarget($id: ID!) {
    getTarget(id: $id) {
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
export const listTargets = /* GraphQL */ `
  query ListTargets(
    $filter: ModelTargetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTargets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
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
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        picture_key
        ownerId
        ownerName
        category{
          id
          name
        }
        target{
          id
          label
        }
        findBook
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        bookId
        ownerId
        ownerName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDiscussion = /* GraphQL */ `
  query GetDiscussion($id: ID!) {
    getDiscussion(id: $id) {
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
export const listDiscussions = /* GraphQL */ `
  query ListDiscussions(
    $filter: ModelDiscussionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiscussions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookId
        name
        receiverId
        senderId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        discussionId
        content
        senderId
        senderName
        receiverId
        receiverName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
