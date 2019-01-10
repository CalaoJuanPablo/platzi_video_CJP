import { OPEN_MODAL, CLOSE_MODAL, SEARCH_VIDEO } from '../action-types';
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