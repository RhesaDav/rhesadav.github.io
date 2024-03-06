export type LangLevel = "Beginner" | "Intermediate" | "Professional"

export type AboutMeTypes = {
  fullName: string
  title: string
  experience: string
  passions: string[]
  languages: {
    name: string
    level: LangLevel
  }[],
  profession: {
    description: string
    expertise: {
      frontEnd: {
        description: string
      }
      backEnd: {
        description: string
      }
      problemSolving: {
        description: string
      }
      teamwork: {
        description: string
      }
      versionControl: {
        description: string
      }
      performanceOptimization: {
        description: string
      }
      scalabilityDeliverability: {
        description: string
      }
    }
  }
  bio: string
}
