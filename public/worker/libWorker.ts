export default function worker(data: Array<number>) {
  function callAPI() {
    return fetch("https://jsonplaceholder.typicode.com/comments");
  }

  const nums = data;

  // heavy computational task: sort 5000000 random numbers
  const sortNums = nums.sort();

  // access location
  const location = self.location;

  // access navigator
  const navigator = self.navigator;

  // access XMLHttpRequest (fetch)
  const apiRes = callAPI();

  // access data types
  const str = String("Little fox");
  const array = [...Array(1000)];
  const date = new Date();
  const roundNum = Math.round(12.34567);

  // access setTimeout
  const timeoutId = setTimeout(() => {
    console.log(
      "Web worker can execute setTimeout, setInterval, clearTimeout & clearInterval functions"
    );
  }, 1000);

  const returnMessage = JSON.parse(
    JSON.stringify({
      sortNums,
      location,
      navigator,
      apiRes,
      str,
      array,
      date,
      roundNum,
      timeoutId,
    })
  );
  console.log({ returnMessage });

  // return message to JS thread
  return returnMessage;
}
