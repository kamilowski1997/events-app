import { emailValidator, trimmedRequiredStringValidator } from './validators';

describe('trimmedRequiredStringValidator', () => {
  it('Should return message when value contains only spaces and message is provided.', () => {
    //given
    const message: string = 'error';
    const value: string = '   ';

    //when
    const res = trimmedRequiredStringValidator(message)(value);

    //then
    expect(res).toEqual(message);
  });
  it('Should return false when value contains only spaces and message is not provided.', () => {
    //given
    const value: string = '   ';

    //when
    const res = trimmedRequiredStringValidator()(value);

    //then
    expect(res).toEqual(false);
  });

  it('Should return true when value contains text with spaces around and message is provided.', () => {
    //given
    const message: string = 'error';
    const value: string = '  dasd ';

    //when
    const res = trimmedRequiredStringValidator(message)(value);

    //then
    expect(res).toEqual(true);
  });

  it('Should return true when value contains text with spaces around and message is not provided.', () => {
    //given
    const value: string = ' dasd ';

    //when
    const res = trimmedRequiredStringValidator()(value);

    //then
    expect(res).toEqual(true);
  });
});

describe('emailValidator', () => {
  it('Should return message when value does not contain email address and message is provided.', () => {
    //given
    const message: string = 'error';
    const value: string = 'example';

    //when
    const res = emailValidator(message)(value);

    //then
    expect(res).toEqual(message);
  });

  it('Should return message when value does not contain email address and message is not provided.', () => {
    //given
    const value: string = 'example';

    //when
    const res = emailValidator()(value);

    //then
    expect(res).toEqual(false);
  });

  it('Should return message when value does not contain email address and message is not provided.', () => {
    //given
    const message: string = 'error';
    const value: string = 'example@example.ex';

    //when
    const res = emailValidator(message)(value);

    //then
    expect(res).toEqual(true);
  });

  it('Should return message when value does not contain email address and message is not provided.', () => {
    //given
    const value: string = 'example@example.ex';

    //when
    const res = emailValidator()(value);

    //then
    expect(res).toEqual(true);
  });
});
