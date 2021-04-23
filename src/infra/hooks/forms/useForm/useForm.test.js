import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './index';

const userInfoMock = {
  name: '',
};

describe('useForm()', () => {
  describe('When user type', () => {
    test('Change the value', () => {
      const { result } = renderHook(() => useForm({
        initialValues: userInfoMock,
      }));
      expect(result.current.userInfo).toEqual(userInfoMock);

      const newuserInfoMock = 'Rogerio';
      const event = {
        target: {
          getAttribute: () => 'name',
          value: newuserInfoMock,
        },
      };
      act(() => {
        result.current.handleChange(event);
      });
      expect(result.current.userInfo).toEqual({ name: newuserInfoMock });
    });
  });
});
