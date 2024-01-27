import dateFormat from "dateformat";

export const likeFormatter = (likeCount) => {
  if (likeCount < 1000) {
    return likeCount.toString();
  } else if (likeCount < 1000000) {
    return (likeCount / 1000).toFixed(1) + "K";
  } else {
    return (likeCount / 1000000).toFixed(1) + "M";
  }
};

export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDate = new Date(dateString).toLocaleString('en-US', options);
    return formattedDate;
  };
  
export const dateFormatter = (rawDate)=>{
  return dateFormat(rawDate, "mmmm dS, yyyy")
}