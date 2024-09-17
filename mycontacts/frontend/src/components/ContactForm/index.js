import PropTypes from 'prop-types';
import { useState } from 'react';
import { ButtonContainer, Form } from './style';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import isEmailValid from '../../utils/isEmailValid';
import { useError } from '../../hooks/useError';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const { setError, getErrorMessageByFieldName, removeError } = useError();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({
        field: 'name',
        message: 'Nome é obrigatório',
      });
    } else {
      removeError('name');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({
        field: 'email',
        message: 'Email inválido',
      });
    } else {
      removeError('email');
    }
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          error={getErrorMessageByFieldName('email')}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
