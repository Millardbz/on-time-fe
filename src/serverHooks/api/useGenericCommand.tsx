import { useState, useCallback } from "react";
import { produce } from "immer";

interface CommandHookOptions<DTO> {
  endpoint: string;
  initialCommand?: { dto: DTO };
}

interface CommandHookReturn<DTO> {
  run: (dto?: DTO) => Promise<void>;
  loading: boolean;
  error: string | null;
  success: boolean | null;
  setCommand: (command: { dto: DTO }) => void;
  command: { dto: DTO } | undefined;
  produceCommand: (recipe: (draft: DTO) => void) => void; // Added for mutating the command data
}

export function useGenericCommand<DTO>({
  endpoint,
  initialCommand,
}: CommandHookOptions<DTO>): CommandHookReturn<DTO> {
  const [command, setCommandInternal] = useState<{ dto: DTO } | undefined>(
    initialCommand
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const run = useCallback(
    async (dto?: DTO) => {
      setLoading(true);
      setSuccess(null);
      setError(null);
      const commandDto = dto || command?.dto;
      if (!commandDto) {
        setError("Command data is not provided.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commandDto),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setSuccess(true);
      } catch (error: any) {
        setError(
          error.message || "An error occurred during command execution."
        );
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    },
    [command, endpoint]
  );

  // Update command data
  const setCommand = (newCommand: { dto: DTO }) =>
    setCommandInternal(newCommand);

  // Function to mutate command data using Immer without immediate running
  const produceCommand = useCallback((recipe: (draft: DTO) => void) => {
    setCommandInternal((currentCommand) =>
      produce(currentCommand, (draftCommand) => {
        if (draftCommand) {
          recipe(draftCommand.dto as DTO); // Add type assertion here
        }
      })
    );
  }, []);

  return { run, loading, error, success, setCommand, command, produceCommand };
}
