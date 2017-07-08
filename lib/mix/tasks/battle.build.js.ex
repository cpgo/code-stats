defmodule Mix.Tasks.Battle.Build.Js do
  use MBU.BuildTask
  import MBU.TaskUtils

  @shortdoc "Build the battle mode JavaScript"

  task _ do
    todo = case Mix.env() do
      :prod -> "battle.build.js.minify"
      _     -> "battle.build.js.copy"
    end

    run_task(todo)
  end
end