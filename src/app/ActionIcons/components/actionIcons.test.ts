import ActionIcons from './index'
import Test from '../../../../Test'

describe('ActionIcons view', () => {
  Test.view('no icon', {
    state: {},
    View: ActionIcons,
    props: { icons: {}}
  });

  Test.view('has checkIcon', {
    state: {},
    View: ActionIcons,
    props: { icons: {checkIcon: true}}
  });

  Test.view('uncheckIcon', {
    state: {},
    View: ActionIcons,
    props: { icons: {checkIcon: true}}
  });

  Test.view('editIcon', {
    state: {},
    View: ActionIcons,
    props: { icons: {editIcon: true}}
  });

  Test.view('deleteIcon', {
    state: {},
    View: ActionIcons,
    props: { icons: {deleteIcon: true}}
  });

  Test.view('check edit delete', {
    state: {},
    View: ActionIcons,
    props: { icons: {checkIcon: true, editIcon: true, deleteIcon: true}}
  });
})
