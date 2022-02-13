import formatDistanceToNow from "date-fns/formatDistanceToNow";

const date = new Date();

const Result = formatDistanceToNow(date, {
  addSuffix: true,
});

export default Result;
