import CheckBoxRow from "./CheckBoxRow.component"

export default function CheckBoxes(){
    var choice:Array<string> = []
    return(
        <div className="flex flex-col gap-7">
            <CheckBoxRow checkboxName="Software"/>
            <CheckBoxRow checkboxName="Mech"/>
            <CheckBoxRow checkboxName="EC"/>
            <CheckBoxRow checkboxName="Bio"/>
        </div>
    )
}