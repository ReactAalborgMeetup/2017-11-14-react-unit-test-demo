import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from "chai";
import chaiJestSnapshot from "chai-jest-snapshot";

configure({ adapter: new Adapter() });
chai.use(chaiJestSnapshot);

beforeEach(function() {
  chaiJestSnapshot.resetSnapshotRegistry();
});
