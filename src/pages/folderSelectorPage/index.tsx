import { SelectFolderButton } from "@/components/common/buttons";
import { FolderSelectorPage } from "@/components/layout/folderSelector";

export function ProjectFolderSelector() {
    return (
        <FolderSelectorPage>
            <SelectFolderButton />
        </FolderSelectorPage>
    );
}