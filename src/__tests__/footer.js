import renderer from 'react-test-renderer';
import Footer from '../components/Footer'

test('SnapShot', () => {
      const footerComp = renderer.create(<Footer />).toJSON()
      expect(footerComp).toMatchSnapshot();
    });