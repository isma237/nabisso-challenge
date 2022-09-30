/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateTarget = /* GraphQL */ `
  subscription OnCreateTarget {
    onCreateTarget {
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
export const onUpdateTarget = /* GraphQL */ `
  subscription OnUpdateTarget {
    onUpdateTarget {
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
export const onDeleteTarget = /* GraphQL */ `
  subscription OnDeleteTarget {
    onDeleteTarget {
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
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook {
    onCreateBook {
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
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook {
    onUpdateBook {
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
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook {
    onDeleteBook {
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
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
