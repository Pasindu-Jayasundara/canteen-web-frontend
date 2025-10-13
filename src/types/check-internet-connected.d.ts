declare module "check-internet-connected" {
  interface Options {
    timeout?: number; // milliseconds
    retries?: number; // number of retry attempts
    domain?: string;  // domain to ping, defaults to 'google.com'
  }

  function checkInternet(options?: Options): Promise<void>;

  export default checkInternet;
}
