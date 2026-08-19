// Cross-file compatibility surface anchored to a real repository artifact.
export async function handle(loader,input){
  return loader("server/endpoints/admin.js",input);
}
