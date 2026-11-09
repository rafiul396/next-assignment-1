const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
};


const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase().replace(/\s+/g, "");
  }

  if (typeof value === "number") {
    return value * 10;
  }

  if (value === true) {
    return "Active";
  }

  return "Inactive";
};


const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
  const latitude = coordinate[0];
  const longitude = coordinate[1];
  const locationName = coordinate[2];

  return "Location: " + locationName + " (" + latitude + ", " + longitude + ")";
};


const concatenateArrays = <T,>(...arrays: T[][]): T[] => {
  const result: T[] = [];

  arrays.forEach((arr) => {
    arr.forEach((item) => {
      result.push(item);
    });
  });

  return result;
};


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
  );
}


function pluckValues<T, K extends keyof T>(
  items: T[],
  key: K
): T[K][] {
  const result: T[K][] = [];

  for (const item of items) {
    result.push(item[key]);
  }

  return result;
}


class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const validateAgeAsync = async (age: number): Promise<string> => {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
};
















