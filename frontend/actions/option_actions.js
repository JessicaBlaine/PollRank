export const CREATE_OPTION = 'CREATE_OPTION';
export const REMOVE_OPTION = 'REMOVE_OPTION';

export const createOption = option => ({
  type: CREATE_OPTION,
  option,
});

export const removeOption = option => ({
  type: REMOVE_OPTION,
  option,
});
