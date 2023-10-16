import Navigation from './components/Navigation'
import {
  Avatar,
  Card,
  CardBody,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react'
import projects from './data/projectList'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <main className="dark text-foreground bg-background p-0 m-0">
      <Navigation />
      <div className="grid grid-cols-5">
        <div className="bg-slate-800 h-[93vh]}">hello</div>
        <div className="col-span-4 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 h-[93vh] p-4">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
            className="flex items-center gap-4 profile-bg w-full h-[200px] rounded"
          >
            <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
             className='wrapper'>
            <Avatar
              className="m-4 h-[150px] w-[150px]"
              isBordered
              src="./images/20200921_132945.jpg"
            />
            </motion.div>
            <div className="bg-black rounded p-1 bg-opacity-30">
              <h1 className="text-4xl font-bold text-white">Sanchit Warang</h1>
              <p className="text-2xl text-white">Software Developer</p>
            </div>
          </motion.div>
          <div className="mt-3 px-5">
            <h3>Projects</h3>
            <div className=" mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
              {projects.map((project, i) => {
                return (
                  <motion.div
                    initial={{
                      opacity: 0,
                      translateX: i % 2 === 1 ? 40 : -40,
                    }}
                    animate={{
                      opacity: 1,
                      translateX: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.3 + 0.5,
                    }}
                    key={project.id}
                    className="wrapper col-span-1"
                  >
                    <Popover placement="top">
                      <PopoverTrigger>
                        <Card className="bg-opacity-50">
                          <CardBody className="grid grid-cols-5 gap-3">
                            <Button
                              variant="shadow"
                              className=" h-[80px] rounded col-span-1 text-white bg-violet-800"
                            >
                              <FontAwesomeIcon
                                className="h-[90%] w-[90%]"
                                icon={faFilm}
                                beat
                                size="sm"
                              />
                            </Button>
                            <div className="col-span-4">
                              <h4>{project.name}</h4>
                              <p>{project.techstack}</p>
                            </div>
                          </CardBody>
                        </Card>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px]">
                        <p>{project.description}</p>
                      </PopoverContent>
                    </Popover>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
