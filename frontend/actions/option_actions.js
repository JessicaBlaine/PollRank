export const CREATE_OPTION = 'CREATE_OPTION';
export const REMOVE_OPTION = 'REMOVE_OPTION';
export const UPDATE_OPTION = 'UPDATE_OPTION';

export const createOption = option => ({
  type: CREATE_OPTION,
  option,
});

export const removeOption = option => ({
  type: REMOVE_OPTION,
  option,
});

export const updateOption = option => ({
  type: UPDATE_OPTION,
  option,
});
