export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ISO8601DateTime: { input: unknown; output: unknown; }
};

export type Mutation = {
  __typename: 'Mutation';
  /** Update task as complete by IDs */
  completeTask: Maybe<Task>;
  /** Deletes tasks by IDs */
  deleteTasks: Maybe<Array<Task>>;
};


export type MutationCompleteTaskArgs = {
  completed: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationDeleteTasksArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type Query = {
  __typename: 'Query';
  getTasks: Array<Task>;
};

export type Task = {
  __typename: 'Task';
  completed: Scalars['Boolean']['output'];
  createdAt: Scalars['ISO8601DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type GetTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTasksQuery = { getTasks: Array<{ __typename: 'Task', id: string, title: string, description: string | null, completed: boolean }> };

export type DeleteTasksMutationVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type DeleteTasksMutation = { deleteTasks: Array<{ __typename: 'Task', id: string }> | null };
