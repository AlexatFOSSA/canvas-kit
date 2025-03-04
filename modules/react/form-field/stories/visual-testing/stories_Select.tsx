import * as React from 'react';

import {
  ComponentStatesTable,
  permutateProps,
  StaticStates,
} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled, customColorTheme} from '../../../../../utils/storybook';

import {Select, SelectOption} from '@workday/canvas-kit-react/select';

export default withSnapshotsEnabled({
  title: 'Testing/Inputs/Select',
  component: Select,
});

export const SelectStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Default', props: {}},
        {label: 'Alert', props: {error: Select.ErrorType.Alert}},
        {label: 'Error', props: {error: Select.ErrorType.Error}},
      ]}
      columnProps={permutateProps(
        {
          className: [
            {label: 'Default', value: ''},
            {label: 'Hover', value: 'hover'},
            {label: 'Focus', value: 'focus'},
            {label: 'Focus Hover', value: 'focus hover'},
            {label: 'Active', value: 'active'},
            {label: 'Active Hover', value: 'active hover'},
          ],
          disabled: [
            {label: '', value: false},
            {label: 'Disabled', value: true},
          ],
        },
        props => {
          if (props.disabled && !['', 'hover'].includes(props.className)) {
            return false;
          }
          return true;
        }
      )}
    >
      {props => (
        <Select
          {...props}
          style={{minWidth: 60, width: 100}}
          onChange={() => {}} // eslint-disable-line no-empty-function
        >
          <SelectOption value="email" label="E-mail" />
          <SelectOption value="phone" label="Phone" />
        </Select>
      )}
    </ComponentStatesTable>
  </StaticStates>
);

export const SelectThemedStates = () => <SelectStates />;
SelectThemedStates.parameters = {
  canvasProviderDecorator: {
    theme: customColorTheme,
  },
};
