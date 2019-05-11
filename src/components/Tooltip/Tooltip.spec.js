import React from 'react';
import Tooltip from './Tooltip';
import { render } from 'react-testing-library';

describe('<Modal />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Tooltip text="Hovered">Tooltip text</Tooltip>);
      expect(container).toMatchSnapshot();
    });
  });

  describe('tile prop', () => {
    it('should display Hover me! as the Tooltip\'s child', () => {
      const { container } = render(<Tooltip text="Hovered">Hover me!</Tooltip>);
      expect(container.querySelector('.rc-tooltip').textContent).toBe('Hover me!');
    });
  });
});
