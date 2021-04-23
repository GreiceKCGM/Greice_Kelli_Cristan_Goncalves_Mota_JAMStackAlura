import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './index';

const userInfoMock = {
  name: '',
  email: '',
  message: '',
};

describe('useForm()', () => {
  describe('when user type', () => {
    test('change the value', () => {
      const { result } = renderHook(() => useForm({
        initialValues: userInfoMock.name,
      }));
      expect(result.current.userInfo).toEqual(userInfoMock.name);

      const newUserInfoMock = 'Rogerio';
      const event = {
        target: {
          getAttribute: () => 'name',
          value: newUserInfoMock,
        },
      };
      act(() => {
        result.current.handleChange(event);
      });
      expect(result.current.userInfo).toEqual({ name: newUserInfoMock });
    });

    describe('when the data is valid', () => {
      test('there should be no errors', async () => {
        const { result } = renderHook(() => useForm({
          initialValues: userInfoMock.email,
          validateSchema: async () => {},
        }));
        expect(result.current.errors).toEqual({});

        const newUserInfoMock = 'felizberto@qualquer.com';
        const event = {
          target: {
            getAttribute: () => 'email',
            value: newUserInfoMock,
          },
        };

        await act(async () => result.current.handleChange(event));
        expect(result.current.userInfo).toEqual({ email: newUserInfoMock });

        expect(result.current.errors).toEqual({});
      });
    });
    // teste de erro do email

    describe('when the field is selected', () => {
      test('it becomes touched', () => {
        const { result } = renderHook(() => useForm({
          initialValues: userInfoMock.message,

        }));

        expect(result.current.touched).toEqual({});

        const event = {
          target: {
            getAttribute: () => 'message',
          },
        };
        act(() => result.current.handleBlur(event));

        expect(result.current.touched).toEqual({ message: true });
      });
    });
  });
});
