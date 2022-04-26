import {
  asyncFinallyGetQuotes,
  asyncGetQuotes,
  asyncTryGetQuotes,
  thenAsyncGetQuotes,
  thenFinallyGetQuotes,
  thenGetQuotes,
  thenTryGetQuotes,
} from './services/promise-me';

export default function App() {
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={async () => console.log(await asyncGetQuotes())}>
        Get Quotes
      </button>
      <button onClick={async () => console.log(await thenGetQuotes())}>
        Then Get Quotes
      </button>
      <button onClick={async () => console.log(await asyncTryGetQuotes())}>
        Async Try Get Quotes
      </button>
      <button onClick={async () => console.log(await thenTryGetQuotes())}>
        Then Try Get Quotes
      </button>
      <button onClick={async () => console.log(await asyncFinallyGetQuotes())}>
        Finally Try Get Quotes
      </button>
      <button onClick={async () => console.log(await thenFinallyGetQuotes())}>
        Then Finally Get Quotes
      </button>
      <button onClick={async () => console.log(await thenAsyncGetQuotes())}>
        Then Async Get Quotes
      </button>
    </>
  );
}
