import { 
  OPEN_MODAL, 
  CLOSE_MODAL, 
  SEARCH_VIDEO, 
  IS_LOADING
} from '../action-types';
export function openModal(id){
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId: id
    }
  }
}

export function closeModal(){
  return {
    type: CLOSE_MODAL
  }
}

export function searchVideo(query){
  return {
    type: SEARCH_VIDEO,
    payload: {
      query
    }
  }
}

export function isLoading(value){
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  }
}

export function searchAsyncVideo(query){
  return (dispatch) => {
    dispatch(isLoading(true));
    setTimeout(() => {
      dispatch(isLoading(false));
      dispatch(searchVideo(query));
    }, 3000);
  }
}