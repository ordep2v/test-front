import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import Container from '.';

it('should render Container with children', () => {
  render(
    <Container>
      <h1>Testando container</h1>
    </Container>,
  );
  const container = screen.getByRole('main');
  const children = screen.getByRole('heading', { name: /Testando container/ });
  expect(container).toBeInTheDocument();
  expect(container).toBeVisible();
  expect(container).toHaveStyle('width: 100%');
  expect(container).toHaveStyle('display: flex');
  expect(children).toBeInTheDocument();
  expect(children).toBeVisible();
});
