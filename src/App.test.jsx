import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('@ckeditor/ckeditor5-react', () => ({
    CKEditor: () => <div>Mock CKEditor</div>
}));
jest.mock('ckeditor5', () => ({
    ClassicEditor: {},
    Bold: {},
    Essentials: {},
    Italic: {},
    Paragraph: {},
    Undo: {}
}), { virtual: true });

describe('App', () => {
    it('renders the CKEditor 5 headline', () => {
        render(<App />);
        expect(screen.getByText(/React CKEditor 5 Integration/i)).toBeInTheDocument();
    });
});
