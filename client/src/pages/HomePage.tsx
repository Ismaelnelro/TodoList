import { Bold, Card, Icon, Italic, Metric, Subtitle, Text, Toggle, ToggleItem } from "@tremor/react";
import { ChartPieIcon, EyeOffIcon, MenuIcon, StatusOfflineIcon, ViewListIcon } from "@heroicons/react/solid";
import { Button } from "@tremor/react";
import { Col, Grid } from "@tremor/react";
import { MouseEvent, useState } from "react";
import { Task } from "../util/typeAndInterfaces";
import { GetTaskByDay } from "../service/Service";

export default function HomePage() {
  const weekdays = ["Monday", "Thuesday", "Wendesay", "Thusady", "Friday", "Saturday", "Sunday"];
  const [task, settask] = useState<Task[]>();

  function OnBringTasksOfDay(e: MouseEvent<HTMLButtonElement>) {
    const day = (e.target as HTMLButtonElement).id;
    const rep = GetTaskByDay(day);
    settask(rep.tasks)
    console.log(rep);

  }


  return (
    <Grid numCols={12} className="h-screen">
      <Col
        numColSpan={2}
        numColSpanSm={3}
        numColSpanLg={1}
        className=" flex flex-col items-center justify-around  bg-zinc-900"
      >
        <Icon size="xl" icon={MenuIcon} />
        <Col
          className=" flex flex-col items-center justify-between gap-4 bg-zinc-900 active:border-yellow-400"
        >
          {weekdays.map((day, index) => (
            <Button
              key={index}
              id={day}
              size="md"
              className="
              w-10 h-10 
              border-0
              outline-none
              bg-slate-700  
              text-white 
              hover:bg-yellow-400 
              hover:text-black
              focus:bg-yellow-400 
              focus:text-black
              "
              onClick={(e) => OnBringTasksOfDay(e)}
            >
              {day.substring(0, 1)}
            </Button>
          ))}
        </Col>
        <Icon size="xl" icon={MenuIcon} />
      </Col>
      <Col numColSpan={10} numColSpanSm={10} numColSpanLg={11} className="bg-yellow-200 p-5 overflow-scroll h-screen">
        <Grid className="flex flex-wrap sm:justify-center lg:justify-normal">
          {task?.map((task, index) => (
            <Card
              key={index}
              decorationColor="indigo"
              decoration="top"
              className={ `w-72 lg:w-72 h-16 rounded-none`}
            >
              <Text>
                <Bold>
                  {task.title.toUpperCase()}
                </Bold>
              </Text>
              {/* <Subtitle> */}
                {/* {task.description} */}
                {/* {task.day} */}
              {/* </Subtitle> */}

              {/* <Subtitle> */}
                {/* <Italic>Completed:{task.completed ? " true" : " false"}</Italic> */}
              {/* </Subtitle> */}
            </Card>
          ))}
        </Grid>
      </Col>
    </Grid>
  )

}

