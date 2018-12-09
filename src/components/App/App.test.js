import React from 'react';
import { articles } from './testData';
import { shallow } from 'enzyme';
import App from './Container';

describe('App Component', () => {
  let wrapper;
  const mockloadArticles = jest.fn();
  beforeEach(() => {
    mockloadArticles.mockClear();
    // pass the mock function as the login prop
    wrapper = shallow(
      <App
        articles={articles}
        loadArticles={mockloadArticles}
      />,
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the mock loadArticles function on Mount', () => {
    expect(mockloadArticles.mock.calls.length).toBe(1);
  });
});
