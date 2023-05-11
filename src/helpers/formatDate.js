export const formatDate = (str) => {
   str = str.split("-");
   return `${str[1]}/${str[2]}/${str[0]}`;
};
