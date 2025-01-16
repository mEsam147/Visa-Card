import { Button } from "../ui/button";

const Buttons = () => {
  const btns = [
    { id: 1, name: "Freeze Card" },
    { id: 2, name: "Replace Card" },
    { id: 3, name: "Cancel Card" },
  ];
  return (
    <div className="flex flex-col gap-y-4 mt-6">
      {btns.map((btn) => (
        <Button
          key={btn.id}
          variant={"outline"}
          className="border border-muted-foreground text-primary rounded-none capitalize "
        >
          <strong>{btn.name}</strong>
        </Button>
      ))}
    </div>
  );
};

export default Buttons;
