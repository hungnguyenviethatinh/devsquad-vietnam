export const TOGGLE_BLOCK_UI = 'TOGGLE_BLOCK_UI';

export const dispatchToggleBlockUi = (isLoading) => ({
  type: TOGGLE_BLOCK_UI,
  payload: {
    isLoading,
  },
});
