import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ReviewsContext } from '../../context/ReviewsContextProvider';
import { useParams, useNavigate} from "react-router-dom";
import SubHeader from '../Header/SubHeader';
import FormInput from './FormInput';
import Button from '../Button/Button';

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const SubmitButton = styled(Button)`
  background: blue;
  margin: 2% 0;
`;

const Form = () => {
  let params = useParams();
  const navigate = useNavigate();
  const { addReviewRequest } = useContext(ReviewsContext);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
    addReviewRequest({
      title,
      rating,
      description,
      id: Math.floor(Math.random() * 100),
      hotelId: parseInt(params.id),
    });
    navigate(-1);
  };

  return (
    <>
      <SubHeader goBack={() => navigate(-1)} title={`Add Review`} />
      <FormWrapper>
        <form onSubmit={handleOnSubmit}>
          <FormInput
            id='title'
            label='Title'
            placeholder='Insert title'
            value={title}
            handleOnChange={setTitle}
          />
          <FormInput
            id='rating'
            label='Rating'
            type='number'
            placeholder='0'
            max={5}
            value={rating}
            handleOnChange={setRating}
          />
          <FormInput
            id='description'
            label='Description'
            type='textarea'
            placeholder='Lorem ipsum...'
            value={description}
            handleOnChange={setDescription}
          />
          <SubmitButton>Add Review</SubmitButton>
        </form>
      </FormWrapper>
    </>
  );
};

export default Form;
