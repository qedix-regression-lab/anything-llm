// Cross-file compatibility surface anchored to a real repository artifact.
export async function handle(loader,input){
  return loader("server/utils/agents/aibitat/plugins/outlook/lib.js",input);
}
