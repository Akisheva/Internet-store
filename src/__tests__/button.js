import { render, screen } from '@testing-library/react';

import Button from '../components/Button';

describe('Button', () => {
    it('find class name', () => {
        render (<Button className='test'/>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
    it('find text', () => {
        render(<Button text='test'/>);
        expect(screen.getByText('test')).toBeInTheDocument()
    })
})