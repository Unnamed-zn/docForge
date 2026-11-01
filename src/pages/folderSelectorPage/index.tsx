import { CreateProjectButton } from "@/components/common/buttons/createProjectButton";
import { OpenProjectButton } from "@/components/common/buttons/openProjectButton";
import { SecondaryContentTemplate } from "@/templates/secondaryContentTemplate";
import { FileText } from "lucide-react";

export function ProjectFolderSelector() {
    return (
        <SecondaryContentTemplate
            Icon={FileText}
            title="DocForge"
            description="Onde as suas ideias tomam forma sem complicações."
            Buttons={<div className="flex flex-row gap-4">
                <OpenProjectButton/>
                <CreateProjectButton/>
            </div>}
        />
    );
}