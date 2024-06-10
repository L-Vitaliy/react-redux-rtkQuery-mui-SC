import ApiMicroservices from "@/app/consts/ApiMicroservices";

const api = ApiMicroservices.USERS;

const NewsEndpoints = {
  PINNED: () => `${api}/news/pinned`,
  LIST: () => `${api}/news`,
  DETAIL: (nid: string) => `${api}/news/${nid}`,
  VOTE: (nid: string | number) => `${api}/news/${nid}/vote`,
  VOTE_CANCEL: (nid: string | number, answerId?: string) =>
    `${api}/news/${nid}/unvote${answerId ? `?answer_id=${answerId}` : ""}`,
  COMMENTS: (nid: string) => `${api}/news/${nid}/comments`,
  COMMENT: (nid: string, cid: string) => `${api}/news/${nid}/comments/${cid}`,
  COMMENT_LIKE: (nid: string, cid: string) => `${api}/news/${nid}/comments/${cid}/like_dislike`,
  FREE_ANSWERS: (nid: string) => `${api}/news/${nid}/free_answers`,
};

export default NewsEndpoints;
