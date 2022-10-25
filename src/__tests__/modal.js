import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Modal from '../components/Modal';

describe ('Modal component', () => {
    it('modal text', () => {
        const modalConfig = {text: 'Hello World'}
        render(<Modal modalConfig={modalConfig}/>)
        const text = screen.getByRole('text-container').innerHTML;
        expect(text).toBe('Hello World');
   })
})
