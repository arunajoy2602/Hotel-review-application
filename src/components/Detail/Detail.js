import React, {useEffect, useContext} from 'react';
import styled from 'styled-components';
import { HotelsContext } from '../../context/HotelsContextProvider';
import { ReviewsContext } from '../../context/ReviewsContextProvider';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import SubHeader from '../Header/SubHeader';
import ReviewItem from './ReviewItem';

const ReviewsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const Detail = () => {
  const location = useLocation();
  let params = useParams();
  const navigate = useNavigate();
  const { hotel, getHotelRequest } = useContext(HotelsContext);
  const { loading, error, reviews, getReviewsRequest } = useContext(
    ReviewsContext,
  );

  useEffect(() => {
    getHotelRequest(params.id);
    if (!reviews.length > 0) {
      getReviewsRequest(params.id);
    }
  }, [getHotelRequest, getReviewsRequest, params.id, reviews.length]);

  return !loading && !error ? (
    <>
      {hotel && (
        <SubHeader
        goBack={() => navigate(-1)}
          title={hotel.title}
          openForm={() => navigate(`${location.pathname}/new`)}
        />
      )}
      <ReviewsWrapper>
        {reviews &&
          reviews.map(review => <ReviewItem key={review.id} data={review} />)}
      </ReviewsWrapper>
    </>
  ) : (
    <Alert>{loading ? 'Loading...' : error}</Alert>
  );
};

export default Detail;
