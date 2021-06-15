import { render, screen } from '@testing-library/react';
import App from './App';
import {ImageUrls, brokenImages} from './Photo_viewer_components/Select_Urls'
import React from 'react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'
// import {Link, Snapshot} from '.../react';

test('heading contains the word photo', () => {
  render(<App />);
  const linkElement = screen.getByText(/photo/i);
  expect(linkElement).toBeInTheDocument();
});

test('links do not have broken images', () => {
  render(<App />);
  const brokenImagesLinks = [];
  console.log(brokenImages);
  brokenImages.forEach(
    number => {brokenImagesLinks.push(`https://picsum.photos/id/6${number}/1600/900.jpg`)
    
  });

  const firstLink = ImageUrls[0];
  expect(!brokenImagesLinks.includes(firstLink));
});

test('selected photo should be highlighted and displayed as a large photo', () => {
  render(<App />);
  const testedPhoto = screen.getByAltText(ImageUrls[0]);
  userEvent.click(testedPhoto);
  expect(testedPhoto.className==='large-img');
  expect(testedPhoto.className==='small-selected-img');

})

describe('PhotoViewer', () => {
  let page = renderer.create(<App />);

  it ("Should match snapshot without selected picture", async() => {
    
    expect(page.toJSON).toMatchSnapshot();
  })

  // it ("Should match snapshot without selected picture", async() => {

  //   page.update()
  //   expect(page.toJSON).toMatchSnapshot();
  // })
})


