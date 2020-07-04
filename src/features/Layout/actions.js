export const TOGGLE_BLOCK_UI = 'TOGGLE_BLOCK_UI';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const dispatchToggleBlockUi = (isLoading) => ({
  type: TOGGLE_BLOCK_UI,
  payload: {
    isLoading,
  },
});

export const dispatchToggleSideBar = (open) => ({
  type: TOGGLE_SIDEBAR,
  payload: {
    open,
  },
});
